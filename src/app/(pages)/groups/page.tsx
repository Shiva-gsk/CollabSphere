"use client"
import React, { useState, useEffect, useRef, useTransition } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import GroupCard from '@/components/GroupCard'
import { useSession } from 'next-auth/react'

export default function Page(){
  const {data:session} = useSession();
  const inputRef = useRef(null);
  const [groups, setGroups] = useState([]);
  const [isPending, startTransition] = useTransition();
  
  useEffect(() => {
    if (session?.user?.email) {
      startTransition(() => {
      fetch(`/api/groups?email=${(session.user)?session.user.email:""}`)
        .then((res) => res.json())
        .then((data) => {console.log(data)
          if (data.error) {
            console.error(data.error);
          } else {
            setGroups(data.data.data);
            // console.log((data.data.data));
          }
        })
        .catch((error) => console.error(error));
      });
    }
  }, [session?.user, session?.user?.email]);

  return (
    <section className='relative w-full h-full flex flex-col items-center justify-center'>
        <div className='w-[250px] absolute top-5 right-[5%] flex'>
            <p className='flex justify-center items-center cursor-pointer' onClick={()=>{if(inputRef.current) inputRef.current.focus()}}>
            <Search/>

            </p>
        <Input ref={inputRef} type="text" placeholder="Search" />

        </div>
        <div className='w-[90%] h-[80%] border border-gray-300 rounded-lg p-4'>
          {/* {isPending ? <p>Loading...</p>}: {groups && groups.map((group, index) => (
            <GroupCard key={index} groupLink={`/groups/${group.id}`} groupName={group.name} groupOrganiser={group.organiser}>
              {group.description}
            </GroupCard>
          ))} */}
          {/* <Suspense fallback={<p>Loading...</p>}> */}
          {isPending ? (
          <p>Loading...</p>
        ) : (
          groups.map((group, index) => (
            <GroupCard
              key={index}
              groupLink={`/groups/${group.id}`}
              groupName={group.name}
              groupOrganiser={group.organiser}
            >
              {group.description}
            </GroupCard>
          ))
        )}
          {/* </Suspense> */}
        </div>
    </section>
  )
}

