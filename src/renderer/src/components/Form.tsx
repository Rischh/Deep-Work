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
      <label className="input flex">
        <input {...register('url')} type="url" className="grow" placeholder="Url" />
      </label>
      {errors.url && (
        <span className="flex justify-center mt-4 text-red-500">{errors.url.message}</span>
      )}
    </form>
  )
}

export default Form
