---
title: Metadata 
layout: page-narrow
permalink: /metadata.html
---

# Metadata Creation 

How to work in the sheet
To create your metadata for the project, you will first make a copy of the metadata template "hist454_metadata_template" in Google Drive.

[HIST 454 Metadata Template](https://docs.google.com/spreadsheets/d/1UG_JhZ1lYLsFeoNpO_D7dztmG8elcZlEaID-mz7QTh8/copy?usp=sharing){:.btn .btn-outline-success target="_blank" rel="noopener"}

Metadata spreadsheet terminology:

- columns = "fields"
- rows = "records" or "items"
- cells = "values"

-----------

## Metadata Fields 

Each of the columns of our project's metadata template spreadsheet are described below
(i.e. how to fill in your metadata spreadsheet!)

### record_contributor

- This is your name! Get credit for your work and show that you did the assignment.
- If you are uncomfortable using your real name, feel free to use a professional sounding false one--let Matt know your pseudonym.
- Example: `Evan Williamson` 

### objectid 

- Unique identifier for the record. Each record needs to have a unique one or it won't show up in the collection. It allows us to refer to the item in the collection.
- Value must be all **lowercase** with no spaces or special characters. Underscores (`_`) and dashes (`-`) are okay; **slashes (`/`) should NOT be used in this field**.
- For this project, please follow the convention of using `hist454` + your initials + the number of record created by you.
- Examples:
    - `hist454ew01` 
    - `hist454ew02`

### filename 

- The filename of your digitized object *or* the full link to your curated object's file download. 
    - For digitized objects, the value must **exactly** match the filename you gave to your item, including the extension (which should be ".jpg" or ".pdf").
    - For curated objects from U of I collections, the value will be a full URL to the downloadable file. You can find this in our digital collections by copying the "Download" link from an individual item page.
- Examples: 
    - digitized image: `hist454ew01.jpg`
    - digitized document: `hist454ew02.pdf`
    - link to image: `https://digital.lib.uidaho.edu/digital/iiif/bar-stock/1147/full/max/0/default.jpg`

### title

- The title field is used to indicate the name of an item. This should be a short, descriptive set of words that identify the item.
- If the item has a title given to it by the creator, use it.
- Example value: `Portrait of Two Men Burned in the Forest Fire` 

### creator

- The person(s) or organization primarily responsible for making the resource.
- Separate multiple creators using a semicolon `;`
- Examples:
    - `Smith, John`
    - `Doe, Jane; Smith, John`
    - `University of Idaho`

### date

- When the item was created. 
- Dates should be represented in the ISO format `yyyy-mm-dd`.
- Examples: 
    - `1876-01-03`
    - `1903-04`
    - `1923`

### description

- A brief account of the object, a short narrative sentence communicating what it is and its contents.
- For this project, your description should help visitors understand *why* this item is relevant to the research project.
- Example value: `Postcard of the Memorial Gymnasium on the University of Idaho campus in Moscow, Idaho.`

### subject

- topic(s) related to the item.
- Separate multiple subjects using a semicolon `;`
- For this project, the subjects should relate to relevant concepts and topics highlights by the class and research, to help contextualize the collection contents.
- Example value: `Dogs; Cats; Zebras`

### location

- The geographic location(s) / place names to which the item is tied.
- Separate multiple locations using a semicolon `;`
- Example value: `Pullman, Washington; Moscow, Idaho`

### latitude

- A geographic coordinate specifying the north-south position of an item.
- Example value: `46.731643`

### longitude

- A geographic coordinate specifying the east-west position of an item.
- Example value: `-117.165625`

### source

- The related source collection or resource from which the object is derived. 
- Example value: `PG 8, Barnard-Stockbridge Collection, University of Idaho Library Special Collections and Archives`

### identifier

- The unique identifier assigned to the object by the object's source collection in Spec.
- Example value: `pg8-x-545i`

### type

- The genre of the object, chosen from the [DCMI Type Vocabulary](https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/2003-02-12/){:target="_blank" rel="noopener"}.
- Choose from: 
    - `Image;StillImage` (photographs, etc)
    - `Image;MovingImage` (films)
    - `Text` (documents) 
    - `Sound` (audio)

### format

- This field indicates the item's media type using the [MIME type](https://www.iana.org/assignments/media-types/media-types.xhtml){:target="_blank" rel="noopener"} standards.
- It is important to get this correct, or the item won't be displayed correctly. 
- Choose from:
    - Image: `image/jpeg`
    - Document: `application/pdf`
    - Audio: `audio/mp3`
    - Video: `video/mp4`

### rightsstatement

- This field is a standardized rights statement, designated in the form of a URI. It should be presented as a [creativecommons.org](https://creativecommons.org/){:target="_blank" rel="noopener"} URI or a [rightsstatements.org](https://rightsstatements.org/en/){:target="_blank" rel="noopener"} URI.
- For this project, we will be choosing from [rightsstatements.org](https://rightsstatements.org/en/){:target="_blank" rel="noopener"}.
- Choose from:
    - Items created before 1927 are public domain in USA. Use: `http://rightsstatements.org/vocab/NoC-US/1.0/`
    - For other items, we will use "Educational Use Permitted": `http://rightsstatements.org/vocab/InC-EDU/1.0/`

---------

## How to find lat / long
