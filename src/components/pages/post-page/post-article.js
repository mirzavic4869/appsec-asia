import { Button } from '@/components/button'
import { Input } from '@/components/input'
import React, { useState } from 'react'

export default function PostArticle() {
  const [fullname, setFullname] = useState('')
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <form
          method="POST"
          action="https://getform.io/f/9b76b8bf-2270-4906-988a-647a5095de91"
          className="flex flex-col max-w-[600px] w-full mx-auto space-y-4"
        >
          <Input
            type="text"
            placeholder="Fullname"
            name="fullname"
            onChange={(e) => setFullname(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full appearance-none rounded-md border border-solid border-[#e2e2e2] px-4 py-2 outline-none focus:border-secondary focus:ring-secondary"
            name="content"
            rows="10"
            placeholder="Content"
          ></textarea>
          <div className="flex justify-end">
            <Button
              disabled={
                fullname === '' || email === '' || title === '' ? true : false
              }
              type={'submit'}
              classAdd="md:w-[200px]"
            >
              Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
