import { TaskType } from "../../enums/task-type-enum";
import { UserTaskStatus } from "../../enums/user-task-staus-enum";

export interface CreateUserTaskRequest {
    title: string;
    description: string;
    dueDate: Date;
    userTaskType?: TaskType;
    userTaskStatus?: UserTaskStatus;
    isActive?: boolean;
}
