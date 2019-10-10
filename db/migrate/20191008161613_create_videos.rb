class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :release_year, null: false
      t.string :ratings, null: false
      
      t.timestamps
    end

    add_index :videos, :title
  end
end
