import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import '../../styles/CreateItinerary.css'
import { createItinerary } from '../../services/backend/itinerariesService';
import {useSelector} from "react-redux"

const CreateItineraryPage = () => {

    const [isFormEdited, setIsFormEdited] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const user = useSelector((state) => {
        return state.user.user
        });
    const {
        register,
        handleSubmit,
        // reset,
        // setValue,
        // watch,
        // formState: { errors },
      } = useForm({
        // defaultValues: defaultFormValues
      });

      const onFormChange = (event) => {
        setIsFormEdited(true)
      }

      const onSubmit = async (event) => {
        event.ownerId = user.user._id
        console.log(event)
        let res = await createItinerary(event)
        console.log(res)
      }

  return (
    <div className='create-itinerary'>
        <h2>Create an Itinerary</h2>
        {errorMessage !== '' && (
          <div className='error-panel'>{errorMessage}</div>
        )}
        <form className='create-itinerary-form' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Itinerary Name</label>
                <input 
                type="text"
                name="itineraryName" 
                {...register("itineraryName", {
                  onChange: (e) => {onFormChange(e)}
                })}
                />
            </div>

            <div>
                <label>Description (optional)</label>
                <input 
                style={{height: "50px"}}
                type="textarea"
                name="description" 
                {...register("description", {
                  onChange: (e) => {onFormChange(e)}
                })}
                />
            </div>

            <input className='button-primary' type="submit" disabled={!isFormEdited} aria-disabled={!isFormEdited} value='Create' />
            
        </form>
    </div>
  )
}

export default CreateItineraryPage
