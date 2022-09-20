import {NextPage} from "next";
import Head from "next/head";
import {Button, FormInput, Input, Option, PhoneInput, Select} from "@components/common";
import {useForm} from "react-hook-form";

function FormTest() {
    const {register, control, handleSubmit, formState: {errors}} = useForm()
    const submit = (data: any) => console.log(data)
    return <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2.5">
        <FormInput label={"Form Input"} name={"form"} register={register} errors={errors}
        />
        <FormInput label={"Form Input Success"} dataValidity={'success'} name={"success"} register={register}
                   errors={errors}
        />
        <FormInput label={"Form Input Error"} dataValidity={'error'} errors={errors} name={"err"} register={register}
        />
        <PhoneInput label="Mobile Number" name="phone" placeholder="eg 712345678"
                    control={control} errors={errors}/>
        <Button type="submit">Submit</Button>
    </form>
}

const Components: NextPage = () => {
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <Head>
                <title>Components</title>
            </Head>
            <main className={"flex flex-col gap-4 py-10"}>
                <Button>Button</Button>
                <Button variant={"outline"}>Button</Button>
                <Button variant={"text"}>Button</Button>
                <Input/>
                <Input placeholder={"Success Input"} dataValidity={"success"}/>
                <Input placeholder={"Error Input"} dataValidity={"error"}/>
                <div>
                    <span>Label</span> <Input placeholder={"Span Input"}/>
                </div>
                <Select>
                    <Option value={0}>H</Option>
                    <Option value={0}>H</Option>
                    <Option value={0}>H</Option>
                </Select>
                <FormTest/>
            </main>
        </div>
    );
};

export default Components;
