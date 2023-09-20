export interface PayoutResponse {
    metadata: Metadata
    data: PayoutDto[]
}

export interface Metadata {
    page: number
    limit: number
    totalCount: number
}

export interface PayoutDto {
    dateAndTime: string
    status: string
    value: string
    username: string
}