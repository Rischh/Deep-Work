import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  url: z.coerce.string().url().min(7)
})

type FormData = z.infer<typeof schema>

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="input input-bordered input-primary flex items-center gap-2">
        Url
        <input
          {...register('url')}
          type="url"
          className="grow"
          placeholder="https://www.website.com"
        />
        {errors.url && <span className="text-red-500">{errors.url.message}</span>}
      </label>
    </form>
  )
}

export default Form
