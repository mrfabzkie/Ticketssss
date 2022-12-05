export interface Ticket {
    ticketID?: number;
    status: string;
    subject: string;
    description: string;
    tracker: string;
    assignee: number;
    requester: number;
}