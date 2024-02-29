'use client';

import { Input } from '../ui/input'
import { Checkbox } from "@/components/ui/checkbox"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


const formSchema = z.object ({
    todo: z.string()
})

export function CreateTodoForm() {
    //Define your form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            todo: "",
        },
    })

    //define a submit handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        //do something with the form values
        //this will be type-safe and validated
        console.log(values)
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="todo"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox
                        checked={field.value}
                    />
                    <Input placeholder="Create new todo..." {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Button type="submit">Submit</Button> */}
          </form>
        </Form>
      )


}







export default CreateTodoForm
