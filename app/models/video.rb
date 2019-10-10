# == Schema Information
#
# Table name: videos
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :string           not null
#  release_year :integer          not null
#  ratings      :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Video < ApplicationRecord
    validates :title, :description, :release_year, :ratings, presence: true
    
    #Can call it anything we want.
    has_one_attached :video
    has_one_attached :photo
end
