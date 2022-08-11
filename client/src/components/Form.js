import React from 'react'
import { useForm } from 'react-hook-form';
import List from './List';
import {default as api} from '../store/apiSlice';
import Snackbar from '@mui/material/Snackbar';

export default function Form() {

    const {register, handleSubmit, resetField} = useForm();
    const [addTransaction] = api.useAddTransactionMutation();

    const onSubmit = async (data) => {
        if(!data) return {};

        if (data.type === "Seeds") { data.amount >= 1000 ?  data.name += " - Loss" : data.name += " - Profit"; }  
        else if (data.type === "Water") { data.amount >= 500 ?  data.name += " - Loss" : data.name += " - Profit"; }
        else if (data.type === "Fertilizers") { data.amount >= 3000 ?  data.name += " - Loss" : data.name += " - Profit"; }
        else if (data.type === "Human Labour") { data.amount >= 4000 ?  data.name += " - Loss" : data.name += " - Profit"; }
        else if (data.type === "Animal Labour") { data.amount >= 3500 ?  data.name += " - Loss" : data.name += " - Profit"; }
        else if (data.type === "Machine Labour") { data.amount >= 2500 ?  data.name += " - Loss" : data.name += " - Profit"; }
        else if (data.type === "Electricity") { data.amount >= 3000 ?  data.name += " - Loss" : data.name += " - Profit"; }
        else if (data.type === "Pesticides/Insecticides") { data.amount >= 3500 ?  data.name += " - Loss" : data.name += " - Profit"; }
        else if (data.type === "Transport") { data.amount >= 4500 ?  data.name += " - Loss" : data.name += " - Profit"; }
        else if (data.type === "Warehouse") { data.amount >= 3200 ?  data.name += " - Loss" : data.name += " - Profit"; }
        else if (data.type === "Packing") { data.amount >= 2000 ?  data.name += " - Loss" : data.name += " - Profit"; }
        else if (data.type === "Taxes (GST)") { data.amount >= 1000 ?  data.name += " - Loss" : data.name += " - Profit"; }


        await addTransaction(data).unwrap();
        resetField('name');
        resetField('amount')

      
    }

  return (
    <div className="form max-w-sm mx-auto w-96">
        
        <h1 className='font-bold pb-4 text-xl'>Expenses</h1>

        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
                <div className="input-group">
                    <input type="text" {...register('name')} placeholder='Seeds, Water, Labour... ' className='form-input' />
                </div>
                <select className='form-input' {...register('type')}>
                    <option value="Seeds" defaultValue>Seeds</option>
                    <option value="Water">Water</option>
                    <option value="Fertilizers">Fertilizers</option>
                    <option value="Human Labour">Human Labour</option>
                    <option value="Animal Labour">Animal Labour</option>
                    <option value="Machine Labour">Machine Labour</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Pesticides/Insecticides">Pesticides/Insecticides</option>
                    <option value="Transport">Transport</option>
                    <option value="Warehouse">Warehouse</option>
                    <option value="Packing">Packing</option>
                    <option value="Taxes (GST)">Taxes</option>
                </select>
                <div className="input-group">
                    <input type="text" {...register('amount')} placeholder='Expense in Rupees' className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Submit Expense</button>
                </div>
            </div>    
        </form>

        <List></List>
    </div>
  )
}
