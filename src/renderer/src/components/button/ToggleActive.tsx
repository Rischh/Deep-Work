type WebsiteProps = {
  website: string
  key: string
}

const ToggleWebsite = ({ website, key }: WebsiteProps) => {
  return (
    <>
      <div className="form-control my-1">
        <label className="label cursor-pointer">
          <span className="label-text" key={key}>
            {website}
          </span>
          <input type="checkbox" className="toggle" />
        </label>
      </div>
    </>
  )
}

export default ToggleWebsite
