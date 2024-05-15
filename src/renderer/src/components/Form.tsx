import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  url: z.coerce.string().url().min(7)
})

type FormData = z.infer<typeof schema>

const Form = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="input input-bordered input-primary flex items-center gap-2">
        Url
        <input
          {...register('url', { required: true, minLength: 7 })}
          type="url"
          className="grow"
          placeholder="https://www.website.com"
        />
      </label>
    </form>
  )
}

export default Form
