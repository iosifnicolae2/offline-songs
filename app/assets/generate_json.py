import os
import json
import chardet

ALBUMS_DIR = 'albums'
SONGS_JSON_FILE = 'songs.json'

songs_json = {}
song_id = 1;
albums = os.listdir(ALBUMS_DIR)

for album in albums:
    if 'DS_Store' in album:
        continue

    album_dir = '%s/%s' % (ALBUMS_DIR, album)
    songs = os.listdir(album_dir)
    for song in songs:
        if 'DS_Store' in song:
            continue

        song_file = "%s/%s" %(album_dir, song)
        with open(song_file, 'rb') as file:
            print(song_file)
            rawdata = b''.join(file.readlines())
            song_charset = chardet.detect(rawdata)['encoding']
        songs_json[song_id] = {
    		"id": song_id,
            "name": song.replace('.txt', ''),
    		"category": album,
    		"number": "",
    		"text": rawdata.decode(song_charset)
    	}
        print(song_id)
        song_id =  song_id + 1


with open(SONGS_JSON_FILE, 'w') as outfile:
    json.dump(songs_json, outfile)
