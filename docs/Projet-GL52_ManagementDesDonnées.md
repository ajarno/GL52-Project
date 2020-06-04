# Projet GL52 - Le management des données

En développement Frontend, une tâche courante consiste à simuler un Backend RESTful pour fournir les données à l'application Frontend et s'assurer que tout fonctionne comme prévu.
On pourrait bien entendu développer un serveur Backend complet en utilisant par exemple Node.js, Express and MongoDB. Mais cela prendrait un certain temps et une approche simple telle que la simulation du Backend permettrait de réduire le temps de développement lié à la mise en place des données et de leur récupération.

Nous avons alors décidé qu'il n'y aurait pas d'implémentation de Backend dans ce projet. Pour cependant avoir un Frontend parfaitement fonctionnel, le principe récupération des données à partir de services lançant des requêtes HTTP à l'API du Backend a été conservé. 
Pour ce faire, nous avons mis en place un serveur comportant une base de données factice à l'aide de **JSON Server**.

## Qu'est-ce que JSON Server ?
JSON Server est un projet qui aide à mettre rapidement en place une API REST avec les opérations CRUD de base. Le site du projet est disponible à l'adresse suivante : https://github.com/typicode/json-server.
A cette adresse, vous retrouverez toute la documentation nécessaire à l'utilisation de JSON Server et à l'ajout/l'accès aux données. Il décrit notamment toutes les fonctionnalités prévues, telles que le filtrage des données, leur ordonnancement...

## Comment s'est passée sa mise en place ?

JSON Server est un package directement installable via NPM. J'ai donc lancé la ligne de commande suivante : 
`npm install --save json-server`
Cette ligne de commande a ajouté JSON Server aux dépendances présentes dans le fichier package.json.

Ensuite, j'ai créé le dossier api dans le même dossier que les sources d'Angular. Dedans, j'ai créer le fichier db.json. C'est le fichier qui contient notre base de données au format JSON.
Dedans on retrouve le code suivant : 
````json
{
	"projects": [
		{ "id": 1, "name": "Projet 1", "description": "Ceci est la description du projet" },
		{ "id": 2, "name": "Projet 2", "description": "Ceci est la description du projet" }
	],
	"productBacklog": [
		{
			"projectId": 1,
			"tasks": [
				{ "name": "Tâche 1", "priority": 5, "description": "Description de la tâche", "users": ["Maxime", "Pierre", "Jeanne"] },
				{ "name": "Tâche 2", "priority": 3, "description": "Description de la tâche", "users": ["Maxime"] },
				{ "name": "Tâche 3", "priority": 2, "description": "Description de la tâche", "users": ["Maxime", "Pierre"] }
			]
		},
		{
			"projectId": 2,
			"tasks": [
				{ "name": "Tâche 1", "priority": 5, "description": "Description de la tâche", "users": ["Paul", "Marie", "Yves"] },
				{ "name": "Tâche 2", "priority": 3, "description": "Description de la tâche", "users": ["Yves"] }
			]
		}
	]
}
````
Ce fichier défini les endpoints de l'API. Par exemple, l'endpoint /projects renvoie la liste des projets de la base.

Ensuite, j'ai créé un fichier de routing, routes.json. Les routes de l'API (du backend factice) ne sont pas par défaut préfixées par /api. Cela pose par problème car dans notre application Angular, nous voulons que toutes nos requêtes HTTP débutent par /api. 
Ainsi, j'ai configuré le routing pour que devant chaque endpoint il y ait automatiquement le préfixe /api.

J'ai ensuite ajouté un script au package.json pour lancer le serveur.
Notre mock API se lance cependant sur le _locahost:3000_.
Il y avait donc des problème de CORS car en _localhost_ il y a un refus de communication entre le port 4200 et le port 3000, j'ai alors configuré un proxy pour obtenir les données sur le port 4200 d'Angular. 

## Comment l'utiliser dans notre projet ?

Tout d'abord, lancez une première fois `npm install`pour installer le serveur.

### Lancer le serveur

Pour lancer le serveur, il suffit de lancer le script que j'ai configuré dans le package.json en faisant : `npm run api`
Suite à cela, notre serveur est disponible est prêt à renvoyer les données aux endpoints configurés.

### Récupérer des données

#### La partie Service
Par exemple, le project.service.ts :
````typescript
export  class  ProjectService {
	  
	constructor(private  http:  HttpClient) { }
	  
	getProjects() :  Observable<Project[]> {
		return  this.http.get<Project[]>(`/api/projects`);
	}
	  
	getProductBacklog(projectId:  number):  Observable<ProductBacklog> {
		return  this.http.get<ProductBacklog>(`/api/productBacklog/${projectId}`);
	}
}
````

Celui-ci a deux méthodes : 
- _getProjects()_ permet de récupérer a liste des projets (voir ce qui se retrouve dans projects du fichier JSON
- _getProductBacklog()_ permet de récupérer le product backlog d'un projet en particulier. Il fait un appel à l'endpoint /productBacklog/:projectId qui est re-routé grâce au fichier routes.json à l'endpoint /productBacklog?projectId=:projectId 

#### Pour récupérer les données dans un composant Angular
Dans le fichier _xxxx.component.ts_ : 
````typescript
export  class  XXXXComponent  implements  OnInit {
	backlog$:  Observable<ProductBacklog>;
	constructor(private  projectService:  ProjectService) {	}
	  
	ngOnInit() {
		this.backlog$  =  this.projectService.getProductBacklog(1);
	}
}
````
Et pour l'afficher dans le fichier _xxxx.component.html_, on peut faire par exemple : 
````html
<div *ngIf="backlog$ | async as backlog">
	<p *ngFor="let task of backlog.tasks">{{task.name}} - {{task.priority}} - {{task.description}}</p>
</div>
````
Le pipe async est absolument indispensable car le Service renvoie un Observable et c'est le pipe qui va s'occuper de faire la conversion vers un objet.

On aura ici utilisé _*ngIf_ car on obtient un objet unique. Tandis que lorsque le service renvoie une liste d'objets il faudra faire un `*ngFor="let project of projects$ | async"` en utilisant directement _project_ et ses propriétés.
