"use server";

// import { getUserByEmail } from "@/data/user";
// import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { fetchGroups } from "@/actions/groupsFetch";

// const fetchGroups = async (email: string) => {
//     try {
//         const user = await getUserByEmail(email);
//         if (!user) {
//             console.log("User not found");
//             return { error: "User not found" };
//         }

//         const groups = await db.team.findMany({
//             where: {
//                 CreatorId: user.id,
//             },
//         });

//         console.log("Groups fetched:", groups);
//         const serializedData = JSON.parse(JSON.stringify(groups));
//         return { data: serializedData };
//     } catch (error: any) {
//         console.log("Error fetching groups:", error.message);
//         return { error: error?.message };
//     }
// };

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
        console.log("Email is required");
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    console.log("Fetching groups for email:", email);
    const data = await fetchGroups(email); // Directly await the async function
    console.log("Data returned:", data);

    return NextResponse.json({ data });
}
