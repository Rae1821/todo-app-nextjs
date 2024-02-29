import Image from "next/image"
import CreateTodo from "./CreateTodo"


const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full px-4">
        <div className="flex justify-between items-center w-full mt-12">
            <div>
                <h2 className="text-3xl text-white uppercase tracking-[8px] font-semibold">Todo</h2>
            </div>
            <div>
                <Image
                    src="/icons/icon-moon.svg"
                    alt="sun"
                    width={24}
                    height={24}
                />
            </div>
        </div>
        <div className="mt-8 w-full">
            <CreateTodo />
        </div>



    </div>

  )
}

export default Header
