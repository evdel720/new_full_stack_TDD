require 'rails_helper'

RSpec.describe User, type: :model do
  it 'requires username and password' do
    new_user = User.new
    new_user.save
    expect(new_user.errors.length).to eq(2)

    new_user = User.create!(username: 'username', password: 'password')
    expect(new_user.username).to eq('username')
  end
end
