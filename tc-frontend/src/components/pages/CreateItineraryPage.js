import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import '../../styles/CreateItinerary.css'
import { createItinerary } from '../../services/backend/itinerariesService';
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import DateRangePickerItem from '../atoms/DateRangePickerItem';

const CreateItineraryPage = () => {
    const navigate = useNavigate()

    const [isFormEdited, setIsFormEdited] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [coverImage, setCoverImage] = useState({})
    const [dateRange, setDateRange] = useState({})
    const [isFormValid, setIsFormValid] = useState(false)
    const user = useSelector((state) => {
        return state.user.user
        });
    const {
        register,
        handleSubmit,
        getValues,
        // reset,
        // setValue,
        // watch,
        // formState: { errors },
      } = useForm({
        // defaultValues: defaultFormValues
      });

      const onFormChange = (event) => {
        let currentValues = getValues()
        
        setIsFormEdited(true)
        setIsFormValid(currentValues.itineraryName !== '' && dateRange.start !== undefined && dateRange.end !== undefined)
      }

      const handleDateRangeSelected = (event) => {
        onFormChange(event)
        setDateRange(event)
      }

      const onSubmit = async (event) => {
        event.ownerId = user.user._id
        event.itineraryImage = coverImage
        const formData = new FormData()
        formData.append('itineraryName', event.itineraryName)
        formData.append('ownerId', user.user._id)
        formData.append('description', event.description)
        formData.append('itineraryImage', coverImage)
        formData.append('startDate', dateRange.start)
        formData.append('endDate', dateRange.end)

      //   for (var pair of formData.entries()) {
      //     console.log(pair[0]+ ', ' + pair[1]); 
      // }
        let res = await createItinerary(formData)
        if(res.status === 201) {
            // redirect to itinerary page
            navigate(`/itinerary/${res.data._id}`, {state: {showCreateSuccess: true}})
        } else {
            setErrorMessage(res?.data?.msg ? res?.data?.msg : 'there was an error')
        }
      }

      const handlePhoto = (e) => {
        setCoverImage(e.target.files[0])
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
                required
                type="text"
                name="itineraryName" 
                {...register("itineraryName", {
                  onChange: (e) => {onFormChange(e)}
                })}
                />
            </div>


            <div>
            <label>Date Range</label>
             <DateRangePickerItem onDateRangeSelected={handleDateRangeSelected}></DateRangePickerItem>
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

            <div>
            <label>Cover Image (optional)</label>
              <input 
                  type="file" 
                  accept=".png, .jpg, .jpeg"
                  name="itineraryImage"
                  onChange={handlePhoto}
              />
            </div>

            <input className='button-primary' type="submit" disabled={!isFormValid} aria-disabled={!isFormEdited} value='Create' />
            
        </form>
    </div>
  )
}

export default CreateItineraryPage
