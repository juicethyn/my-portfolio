export type Status = "online" | "busy" | "offline";

export const currentStatus: Status = "busy";

export const statusMap = {
    online: {
    label: "Online",
    color: "bg-green-500",
    },
    "busy": {
    label: "Busy",
    color: "bg-red-500",
    },
    "offline": {
    label: "Offline",
    color: "bg-gray-500",
    }
}