"use server"
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';



export const fetchGroups = async (email: string) => {
        try {
            const user = await getUserByEmail(email);
            if(!user){
                return {error: "User not found"};
            }
            const groups = await db.task.findMany({
                where: {
                    assigneeId: user.id,
                },
            });
            console.log(groups);
            const serializedData = JSON.parse(JSON.stringify(groups));
            return {data: serializedData};
        } catch (error) {
            if (error instanceof Error) {
                return {error: error.message};
            } else {
                return {error: "An unknown error occurred"};
            }
        }
};