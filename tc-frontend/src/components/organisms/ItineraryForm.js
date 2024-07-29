import React, { useState }  from 'react'
import '../../styles/CreateItinerary.css'
import { useForm } from 'react-hook-form';
import {useSelector} from "react-redux"
import DateRangePickerItem from '../atoms/DateRangePickerItem';

const ItineraryForm = ({onFormSubmitted, defaultFormValues}) => {

    const [isFormEdited, setIsFormEdited] = useState(false)
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
      } = useForm({
        defaultValues: defaultFormValues
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

    const handlePhoto = (e) => {
      setCoverImage(e.target.files[0])
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
        onFormSubmitted(formData)

      //   for (var pair of formData.entries()) {
      //     console.log(pair[0]+ ', ' + pair[1]); 
      // }
    }

  return (
    <div>

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

export default ItineraryForm
