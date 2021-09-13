USE capstone_db;

INSERT INTO locations(address_line1, address_line2, city, latitude, longitude, postal_code, state)
VALUES (null, null, null, 30.24386812395879, -97.71888645202037, '78741', null),
       (null, null, null, 30.249084239380977, -97.71205036541915, '78741', null),
       (null, null, null, 30.23257098441853, -97.73663903452575, '78741', null),
       ('8005 E Sprague Ave', null, 'Spokane Valley', 47.657364025307686, -117.29739710526263, '99212', 'Washington'),
       (null, null, null, 47.69531911916843, -117.3040398939753, '99212', null),
       (null, null, null, 47.6648462070234, -116.81396931106491, '83814', null),
       (null, null, null, 45.884412650098454, -68.96677871439176, '04462', null),
       ('18 Briers Way', null, 'Vassalboro', 44.41297673846316, -69.66994147453403, '04989', 'Maine'),
       ('81 Main St', null, 'Madison', 44.79765558122037, -69.88177260073076, '04950', 'Maine');

INSERT INTO events(date_created, description, outdoor, title, type_id, user_id, location_id)
VALUES ('2021-09-12 11:39:12',
        'Bacon ipsum dolor amet pork picanha pork loin pancetta. Leberkas swine kevin pancetta, venison sirloin ham hock beef ribs hamburger bresaola turducken turkey. Ground round picanha cow shankle tail flank. Cow ground round kielbasa pastrami ball tip tongue.',
        'y', 'Most bass contest', 20, 8, 1),
       ('2021-09-01 10:05:10',
        'Bacon ipsum dolor amet pork picanha pork loin pancetta. Leberkas swine kevin pancetta, venison sirloin ham hock beef ribs hamburger bresaola turducken turkey. Ground round picanha cow shankle tail flank. Cow ground round kielbasa pastrami ball tip tongue.',
        'y', 'Hiking at dawn', 2, 4, 2),
       ('2021-09-02 17:54:23',
        'Bacon ipsum dolor amet pork picanha pork loin pancetta. Leberkas swine kevin pancetta, venison sirloin ham hock beef ribs hamburger bresaola turducken turkey. Ground round picanha cow shankle tail flank. Cow ground round kielbasa pastrami ball tip tongue.',
        'y', 'Camping on the shoreline', 11, 7, 6),
       ('2021-09-07 08:30:01',
        'Bacon ipsum dolor amet pork picanha pork loin pancetta. Leberkas swine kevin pancetta, venison sirloin ham hock beef ribs hamburger bresaola turducken turkey. Ground round picanha cow shankle tail flank. Cow ground round kielbasa pastrami ball tip tongue.',
        'y', 'Frisbee with the dogs', 5, 6, 5),
       ('2021-09-05 20:45:36',
        'Bacon ipsum dolor amet pork picanha pork loin pancetta. Leberkas swine kevin pancetta, venison sirloin ham hock beef ribs hamburger bresaola turducken turkey. Ground round picanha cow shankle tail flank. Cow ground round kielbasa pastrami ball tip tongue.',
        'n', 'Bowling after sunset. BYOB', 13, 4, 4),
       ('2021-09-04 07:38:22',
        'Bacon ipsum dolor amet pork picanha pork loin pancetta. Leberkas swine kevin pancetta, venison sirloin ham hock beef ribs hamburger bresaola turducken turkey. Ground round picanha cow shankle tail flank. Cow ground round kielbasa pastrami ball tip tongue.',
        'y', 'Bring your mountain bikes to mount Katahdin', 16, 3, 7),
       ('2021-09-08 15:11:55',
        'Bacon ipsum dolor amet pork picanha pork loin pancetta. Leberkas swine kevin pancetta, venison sirloin ham hock beef ribs hamburger bresaola turducken turkey. Ground round picanha cow shankle tail flank. Cow ground round kielbasa pastrami ball tip tongue.',
        'n', 'Indoor paintball tournament', 41, 2, 8),
       ('2021-09-05 19:47:46',
        'Bacon ipsum dolor amet pork picanha pork loin pancetta. Leberkas swine kevin pancetta, venison sirloin ham hock beef ribs hamburger bresaola turducken turkey. Ground round picanha cow shankle tail flank. Cow ground round kielbasa pastrami ball tip tongue.',
        'n', 'How good are you with compound bows?', 38, 1, 9),
       ('2021-09-01 10:19:26',
        'Bacon ipsum dolor amet pork picanha pork loin pancetta. Leberkas swine kevin pancetta, venison sirloin ham hock beef ribs hamburger bresaola turducken turkey. Ground round picanha cow shankle tail flank. Cow ground round kielbasa pastrami ball tip tongue.',
        'y', 'Biking group starting on Parker Lane.', 49, 6, 3),
       ('2021-09-01 12:21:31',
        'Bacon ipsum dolor amet pork picanha pork loin pancetta. Leberkas swine kevin pancetta, venison sirloin ham hock beef ribs hamburger bresaola turducken turkey. Ground round picanha cow shankle tail flank. Cow ground round kielbasa pastrami ball tip tongue.',
        'n', 'Lets bust shots', 39, 5, 9);



