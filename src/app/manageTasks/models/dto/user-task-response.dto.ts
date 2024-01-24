import { TaskType } from "../../enums/task-type-enum";
import { UserTaskStatus } from "../../enums/user-task-staus-enum";

export interface UserTaskReponse {
    title: string;
    description: string;
    dueDate: Date;
    userAccountRefKeys: string[];
    userTaskType: TaskType;
    userTaskStatus: UserTaskStatus;
    isActive: boolean;
}
