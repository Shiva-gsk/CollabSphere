import React from 'react'
import { Card, CardContent, CardHeader, CardFooter, CardTitle} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'


interface CardWrapperProps {
    children: React.ReactNode,
    groupName: string,
    groupOrganiser: string,
    groupLink: string,
}

const GroupCard = ({children, groupName, groupOrganiser, groupLink,}:CardWrapperProps) => {
  return (
    <Card className={cn("w-full flex flex-col justify-center items-center p-2 ")}>
        <CardHeader>
            <CardTitle><div className={cn("")}>{groupName}</div></CardTitle>
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

export default GroupCard