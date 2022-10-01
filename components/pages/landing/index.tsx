import {MdOutlineKeyboardArrowRight, MdOutlineMyLocation} from "react-icons/md"
import {Button} from "@components/common";
import {InputUnstyled} from "@mui/base";
import {Town} from "@core/models";

export function Landing() {
    return <main
        className={'mt-[4.6rem] md:mt-[5rem] pl-4 h-full w-full flex flex-col items-center justify-start'}>
        <ServiceCatergories/>
        <Hero/>
        <AdvertsList label={"Services Near You"} adverts={[]}/>
    </main>
}

const advertList: Advert[] = [
    {
        id: 1,
        User: {
            id: 1,
            FirstName: "Rafiki",
            MobileNumber: "254712345678",
            IDNumber: "723623282"
        },
        Product: {
            id: 1,
            Name: "Catering",
            CategoryID: 1
        },
        Location: {
            id: '1',
            Name: "Kagemi, Nairobi"
        }

    }
]

type Category = { id: number, Name: string }

function ServiceCatergories() {
    const categories: Category[] = [
        {id: 1, Name: "Transport"},
        {id: 1, Name: "Housing"},
        {id: 1, Name: "Laundry"},
        {id: 1, Name: "Catering"},
        {id: 1, Name: "Parks"},
        {id: 1, Name: "Bodaboda"},
        {id: 1, Name: "Parks"},
        {id: 1, Name: "Bodaboda"},
        {id: 1, Name: "Laundry"},
        {id: 1, Name: "Catering"},
        {id: 1, Name: "Catering"},
        {id: 1, Name: "Catering"},
    ]

    function CategoryItem(category: Category) {
        return <div
            className="inline-flex items-center justify-center px-5 py-1 rounded-full shadow active:bg-gray-100">
            <p className="text-sm font-semibold">{category.Name}</p>
        </div>
    }

    return <div className={'w-full'}>
        <h2 className="font-semibold">Service Categories</h2>
        <div className={"flex flex-row items-center gap-2"}>
            <div
                className={'w-full py-2 px-0.5 overflow-hidden overflow-x-scroll flex flex-row items-center gap-3 md:gap-4'}>
                {
                    categories.map(({id, Name}, index) => {
                        return <CategoryItem key={index} id={id} Name={Name}/>
                    })
                }
            </div>
            <div>
                <div className="p-1 rounded-lg hover:bg-gray-100">
                    <MdOutlineKeyboardArrowRight className={'w-6 h-6'}/>
                </div>
            </div>
        </div>
    </div>
}

function Hero() {
    return <div className={"flex flex-col items-center justify-center gap-10 py-12"}>
        <p className="text-3xl md:text-5xl font-semibold text-center">Find the best people<br/>to serve you</p>
        <div
            className={"max-w-[20rem] md:max-w-none grid overflow-hidden grid-cols-7 md:grid-cols-10 grid-rows-1 md:gap-2 bg-input_bg rounded-3xl px-4 py-2.5"}>
            <InputUnstyled
                placeholder={"Search for Service"}
                componentsProps={{
                    root: {className: "box col-span-5 pl-2 md:col-span-8 pr-3 flex items-center justify-between gap-2"},
                    input: {className: "w-full bg-transparent outline-none"}
                }}
                endAdornment={<MdOutlineMyLocation className={"cursor-pointer w-5 h-5 md:w-6 md:h-6"}/>}
            />
            <Button className={"box col-span-2 rounded-[2rem]"}>Search</Button>
        </div>
    </div>
}

interface Advert {
    id: number,
    User: {
        id: number,
        MobileNumber: string,
        IDNumber: string,
        FirstName: string
    },
    Product: Product,
    Location: Town,
    GenderID: number,
    Timestamp: Date,
    ExpiryDate: Date
}

interface Product {
    id: number,
    Name: string,
    CategoryID: number
}

function AdvertItem({id, User, Product, Timestamp, ExpiryDate, Location}: Advert) {
    return <div>
        <div
            className="inline-flex flex-col space-y-3 items-start justify-start w-52 px-4 py-8 bg-white border rounded-lg border-black border-opacity-10">
            <p className="w-full text-base font-bold text-gray-700">Catering Services</p>
            <p className="w-full text-xs text-gray-600">Our catering services are great, you are going enjoy them</p>
            <div className="inline-flex space-x-1 items-center justify-end w-full">
                <div className="flex space-x-1 items-center justify-center flex-1">
                    <div className="relative" style={{width: 20, height: 20,}}>
                        <div className="w-5 h-5 bg-gray-300 rounded-full"/>
                        <div className="w-2 h-2.5 absolute m-auto inset-0 bg-green-900 rounded-full"/>
                    </div>
                    <p className="flex-1 text-xs italic font-italic text-green-900">Rafiki cafe</p>
                </div>
                <div className="flex space-x-2.5 items-center justify-start">
                    <div className="w-2 h-full bg-green-900 rounded-full"/>
                    <p className="text-xs text-gray-600">Kagemi, Nairobi</p>
                </div>
            </div>
        </div>
    </div>
}

function AdvertsList({label, adverts}: { label: string, adverts: Advert[] }) {
    //TODO Fix Alert System
    return <div className={"w-full"}>
        <p className="font-semibold">{label}</p>
        <div>
            {
                adverts.map((advert, index) => {
                    return <AdvertItem key={index} {...advert}/>
                })
            }
        </div>
    </div>
}