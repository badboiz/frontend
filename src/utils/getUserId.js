import uuidv4 from 'uuid/v4';

export default function getUserId() {
  const userId = window.localStorage.getItem('userid');
  if (userId) {
    return userId;
  }
  else {
    const newUserId = uuidv4();
    window.localStorage.setItem('userid', newUserId);
    return newUserId;
  }
}