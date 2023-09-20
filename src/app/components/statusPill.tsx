import { StatusPill } from "./styles"

interface IPillProps {
    status: string
}

export const Pill : React.FC<IPillProps> = ({status}) => {
    return <StatusPill status={status}>{status === 'Completed' ? 'Paid' : status}</StatusPill>
}