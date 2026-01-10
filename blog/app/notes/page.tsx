import { NotesList } from 'app/components/notes'

export const metadata = {
  title: 'Notes',
  description: 'My notes.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Notes</h1>
      <NotesList />
    </section>
  )
}
