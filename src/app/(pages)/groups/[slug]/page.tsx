
import React from 'react'

const Page = async ({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) => {
    const { slug } = await params;
    // eslint-disable-next-line react-hooks/rules-of-hooks
  return <div>My Post: {slug}</div>

}

export default Page
