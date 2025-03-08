"use server"
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';



export const fetchGroups = async (email: string) => {
        try {
            const user = await getUserByEmail(email);
            if(!user){
                return {error: "User not found"};
            }
            const groups = await db.team.findMany({
                where: {
                    CreatorId: user.id,
                },
            });
            console.log(groups);
            const serializedData = JSON.parse(JSON.stringify(groups));
            return {data: serializedData};
        } catch (error) {
            return {error: error.message};
        }
};