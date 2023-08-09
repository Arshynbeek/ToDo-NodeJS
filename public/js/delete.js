function deleteItem(id) {
  axios.delete(`/delete/${id}`).then(res => location.reload());
}