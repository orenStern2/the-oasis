import toast from 'react-hot-toast'
import supabase, { supabaseUrl } from './supabase.js'

export async function getCabins() {
 const { data, error } = await supabase.from('cabins')
   .select('*')
  if (error) {
    console.error('Cabins could not be loaded')
    throw new Error('Cabins could not be loaded')
  } else {
    return data
  }
}

export async function deleteCabin(id){  
const { data, error } = await supabase
  .from('cabins')
  .delete()
  .eq('id', id)
  if (error) {
    console.error('Cabin could not be deleted')
    throw new Error('Cabin could not be deleted')
  } else {
    return data
  }
}

export async function createEditCabin(newCabin, id) {
  
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. create/edit the cabin 
  let query = supabase.from('cabins')
  // A) CREATE
  if(!id) query =  query.insert([{...newCabin, image: imagePath}]);

  // B) EDIT
  if(id) query = query.update({...newCabin, image: imagePath}).eq('id', id);

  const {data, error} = await query.select().single();

  if (error) {
    throw new Error('Cabin could not be created: ' + error.message)
  } 
  //2. upload the image
  if(hasImagePath) return data;
  
  const { error: uploadError } = await supabase.storage
  .from('cabin-images')
  .upload(imageName, newCabin.image);

  //3 . Delete the cabin if the image upload failed
  if (uploadError) {
    await supabase
      .from('cabins')
      .delete()
      .eq('id', data[0].id);

    toast('Image could not be uploaded: ' + uploadError.message);
  } 
    return data
  
 }
