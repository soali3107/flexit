@videos.each do |video|
    json.set! video.id do 
        json.extract! video, :id, :title, :description, :release_year, :ratings
        if video.photo.attached?
            json.photo  url_for(video.photo)
        end
        
        json.video  url_for(video.video) if video.video.attached?
    end
end