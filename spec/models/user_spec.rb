require 'rails_helper'

RSpec.describe User, type: :model do
  it 'requires email and password' do
    new_user = User.create(password: 'password')
    new_user.save
    expect(new_user.id).to eq(nil)
    new_user.email = 'newuser@example.com'
    new_user.save
    expect(new_user.class).to eq(User)
    expect(new_user.id).not_to eq(nil)
  end
end
