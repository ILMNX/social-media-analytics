import { db } from "@/src/db";
import { authTable, usersTable } from "@/src/db/schema";
import { postsTable } from "@/src/db/schema";
import Image from "next/image";

export default async function Home() {

  const user = await db.query.usersTable.findMany();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
      </main>
      <form action={async() =>{
        "use server";
        await db.insert (usersTable).values({
          id : 1,
          age : 20,
          email : "john@gmail.com",
          name : "John Doe",
        })
        await db.insert (postsTable).values({
          id : 1,
          content : "Hello World",
          title : "First Post",
          userId : 1,
        })
        await db.insert (authTable).values({
          id : 1,
          email : "admin@gmail.com",
          password : "123",
          username : "admin",
        })
      }}
      
      >
        <button type="submit">Submit</button>
      </form>

      {user.map((user) => (
        <div key={user.id} className="flex items-center gap-4">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
      
  );
}
