def configure_permitted_parameters
  devise_parameter_sanitizer.for(:sign_up) << :name
  devise_parameter_sanitizer.for(:sign_up) << :provider
  devise_parameter_sanitizer.for(:sign_up) << :uid
end
