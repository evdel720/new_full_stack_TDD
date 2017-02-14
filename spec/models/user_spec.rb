require 'rails_helper'

RSpec.describe User, type: :model do
  it 'requires username, email and password' do
    new_user = User.create!(username: 'username', password: 'password', email: 'newuser@example.com')
    expect(new_user.id).not_to eq(nil)
    expect(new_user.class).to eq(User)
  end
end
