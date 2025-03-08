import { cn } from '@/lib/utils'
import { Link } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'

// type Props = {

// }
interface CardWrapperProps {
    children: React.ReactNode,
    groupName: string,
    groupOrganiser: string,
    groupLink: string,
}

const TaskCard = ({children, groupName, groupOrganiser, groupLink,}:CardWrapperProps) => {
  return (
    <Card className={cn("w-full flex flex-col justify-center items-center p-2 ")}>
        <CardHeader>
            <CardTitle><div className={cn("")}>{groupName}{groupOrganiser}</div></CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        <CardFooter >
            <Button variant="link"><Link href={groupLink}>Go to Group</Link></Button>
        </CardFooter>
    </Card>
  )
}

export default TaskCard;