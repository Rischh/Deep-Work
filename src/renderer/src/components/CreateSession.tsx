import { useContext } from 'react'
import { GiWizardStaff } from 'react-icons/gi'
import { IoBedOutline } from 'react-icons/io5'
import {
  MdOutlineEmojiFoodBeverage,
  MdOutlineFamilyRestroom,
  MdOutlineWbSunny
} from 'react-icons/md'
import { WiMoonset, WiSunrise } from 'react-icons/wi'
import { Card, Navbar, NodeTemplate } from './'
import ContentContext from './contexts/contentContext'

const CreateSession = () => {
  const { dispatch } = useContext(ContentContext)

  const handleClick = (session: 'create' | 'edit') => {
    dispatch({ type: session })
  }

  return (
    <>
      <div className="flex flex-col h-full">
        <Navbar>
          <button
            onClick={() => {
              handleClick('create')
            }}
            className="mx-10 divide-y-2 divide-y-reverse underline underline-offset-[1rem] decoration-[#591DDD] "
          >
            <span
              className="text-slate-50
            "
            >
              Create
            </span>
          </button>
          <button
            onClick={() => {
              handleClick('edit')
            }}
            className="hover:underline underline-offset-[1rem] decoration-[#591DDD] "
          >
            <span className="hover:text-slate-400">Edit</span>
          </button>
        </Navbar>
        <div className="h-full grid grid-cols-3 grid-rows-3 gap-2 p-10">
          <Card span="row-span-2" color="bg-[#591DDD]" hover="hover:bg-[#6837d2] ">
            <div className="h-full flex flex-col justify-end items-center p-2">
              <div className="text-lg font-bold">Create your Session</div>
              <div className="text-sm">Adapt them to your Agenda</div>
            </div>
          </Card>
          <Card>
            <NodeTemplate
              name="Miracle Morning"
              date="05:00 to 07:00"
              img={<WiMoonset />}
            ></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate
              name="Matinal Deep Work"
              date="08:00 to 11:00"
              img={<WiSunrise />}
            ></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate
              name="After-noon Deep Work"
              date="13:00 to 16:00"
              img={<MdOutlineWbSunny />}
            ></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate
              name="Dinner Time"
              date="19:00 to 20:00"
              img={<MdOutlineEmojiFoodBeverage />}
            ></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate
              name="Time for Family"
              date="16:00 to 17:00"
              img={<MdOutlineFamilyRestroom />}
            ></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate
              name="Hermit Mode"
              date="00:00 to 23:59"
              img={<GiWizardStaff />}
            ></NodeTemplate>
          </Card>
          <Card>
            <NodeTemplate
              name="Bed Time"
              date="21:00 to 05:00"
              img={<IoBedOutline />}
            ></NodeTemplate>
          </Card>
        </div>
      </div>
    </>
  )
}

export default CreateSession
