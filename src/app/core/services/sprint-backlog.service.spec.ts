import { TestBed } from '@angular/core/testing';

import { SprintBacklogService } from './sprint-backlog.service';

describe('SprintBacklogService', () => {
  let service: SprintBacklogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintBacklogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
