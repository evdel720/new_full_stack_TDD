const checkUser = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/auth/is_signed_in.json"
  })
  .done(success)
  .fail(error);
};

export { checkUser };
