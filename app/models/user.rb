# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

#FIGVAAPER
class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    
    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(email, password)
        email = User.find_by(email: password)
        (email && email.is_password?(password)) ? email : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end
end
