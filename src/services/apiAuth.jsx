import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  console.log(data);
  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  let updateDate;
  if (password) updateDate = { password };
  if (fullName) updateDate = { data: { fullName } };

  // 1. update password OR fullName
  const { data, error } = await supabase.auth.updateUser(updateDate);
  if (error) {
    throw new Error(error.message);
  }
  if (!avatar) return data;
  // 2. upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) {
    throw new Error(storageError.message);
  }
  //3. use avatar to updtae the user metadata
  const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars//${fileName}`,
    },
  });
  if (error2) {
    throw new Error(error2.message);
  }
  return updateUser;
}
