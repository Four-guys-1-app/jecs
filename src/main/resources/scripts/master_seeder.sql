USE capstone_db;

INSERT INTO Types (type)
VALUES ('General Discussion'), ('Hiking'), ('Yoga'), ('Swimming'), ('Frisbee'), ('Gardening'),
       ('Skiing'), ('Snowboarding'), ('Surfing'), ('Golf'), ('Camping'), ('Boating'), ('Bowling'),
       ('Paddle boarding'), ('Tennis'), ('Mountain biking'), ('Nordic skiing'), ('Snorkeling'),
       ('Backpacking'), ('Fishing'), ('Water skiing'), ('Jet skiing'), ('Horseback Riding'),
       ('Skydiving'), ('Caving'), ('Scuba Diving'), ('Rock Climbing'), ('Parasailing'),
       ('Bungee Jumping'), ('Heli skiing'), ('Back country trekking'), ('Basketball'),
       ('Football'), ('Weight lifting'), ('Volleyball'), ('Base jumping'),
       ('Archery'), ('Firing range'), ('Zip lining'), ('Paintball'), ('Kickball'),
       ('Kayaking'), ('Rafting'), ('Crossfit'), ('Soccer'), ('Baseball'), ('Running'),
       ('Cycling'), ('Walking'), ('Gym group');


INSERT INTO Users (full_name, username, email, password, bio, postal_code, role)
VALUES ('Sean Lewis', 'slew', 'slew@mail.com', 'erogin30g', 'slew is slew', '43820', 'a'),
       ('Erik Ayala', 'ayye yo', 'yoyo@mail.com', 'w4982h4g9u', 'lettttts goooo', '90387', 'a'),
       ('Josh Borreli', 'kickn', 'blah@mail.com', '2928uhg297g', 'bacon ipsum blah blah', '78640', 'a'),
       ('Chris Espinoza', 'anime', 'anime@mail.com', 'fdkjrisgubhwo', 'I must have copious amounts of anime',
        '83755', 'a');

INSERT INTO Users (full_name, username, email, password, bio, postal_code, role)
VALUES ('Bob Bobson', 'bober', 'bob@mail.com', '478heouwhe', 'I am bob.. what', '23745', 'u'),
       ('Samantha Jones', 'Sammy', 'sam723@mail.com', '2984hfgwed', 'Been around the world...', '84736', 'u'),
       ('Jon Johnson', 'heyhey jj', 'jhey@mail.com', '8b39huv02', 'blah blah blah blah blah blah', '24779', 'u'),
       ('Lizzy Merkin', 'Lizzzz', 'zzzil@mail.com', 'wogi2h0v', 'Romaine is my favorite lettuce', '12634', 'u');


INSERT INTO posts (title, body, create_date, user_id, type_id)
VALUES ('Hello', 'This is a test bodyChislic andouille ball tip ribeye. Tongue turkey andouille meatloaf. Turkey turducken pork chop pork kielbasa cupim, tri-tip alcatra bacon spare ribs beef tail meatball. Corned beef biltong andouille hamburger shankle flank ham bacon ground round rump. Beef ham short loin, strip steak fatback ribeye prosciutto ham hock sausage flank leberkas kielbasa shoulder corned beef filet mignon. Pork chop pig burgdoggen alcatra bacon ball tip brisket turkey tongue tail bresaola picanha kielbasa.','2021-09-10 01:15:12' ,2,8),
       ('How are we doing today', 'I want to learn how to do yoga how do?Doner frankfurter pig, pork chop kielbasa boudin ball tip burgdoggen hamburger cow pastrami andouille cupim bacon ground round. Sausage pork prosciutto tail t-bone, kevin meatball. Short loin pork belly beef ribs meatloaf capicola. Chicken hamburger ground round turducken pork chop t-bone venison salami biltong shoulder sirloin pork meatloaf buffalo strip steak. Jowl tri-tip tail, leberkas kielbasa strip steak picanha alcatra pork spare ribs turkey pork chop brisket t-bone shoulder.', '2021-09-10 08:00:35', 3, 3),
       ('I like socks', 'but they always get really sweaty what do i do? Bacon ipsum dolor amet burgdoggen leberkas pig shank tongue meatball buffalo bresaola swine alcatra turkey. Kielbasa capicola tenderloin, short loin tri-tip chicken shoulder shankle bresaola fatback. Corned beef short loin swine chislic. Swine shoulder cupim, short ribs tri-tip brisket pork loin landjaeger doner capicola ground round spare ribs. Landjaeger flank shank, doner tail prosciutto spare ribs leberkas hamburger swine pastrami. Drumstick bresaola ham hock bacon buffalo chislic tongue picanha boudin shankle.', '2021-09-10 08:00:35', 1, 10),
       ('I just lifted..', '400 lbs, but that was just me getting out of bed..Chislic andouille ball tip ribeye. Tongue turkey andouille meatloaf. Turkey turducken pork chop pork kielbasa cupim, tri-tip alcatra bacon spare ribs beef tail meatball. Corned beef biltong andouille hamburger shankle flank ham bacon ground round rump. Beef ham short loin, strip steak fatback ribeye prosciutto ham hock sausage flank leberkas kielbasa shoulder corned beef filet mignon. Pork chop pig burgdoggen alcatra bacon ball tip brisket turkey tongue tail bresaola picanha kielbasa.', '2021-09-10 08:00:35', 2, 34),
       ('Im an', 'Oscar myer weeiner. Doner frankfurter pig, pork chop kielbasa boudin ball tip burgdoggen hamburger cow pastrami andouille cupim bacon ground round. Sausage pork prosciutto tail t-bone, kevin meatball. Short loin pork belly beef ribs meatloaf capicola. Chicken hamburger ground round turducken pork chop t-bone venison salami biltong shoulder sirloin pork meatloaf buffalo strip steak. Jowl tri-tip tail, leberkas kielbasa strip steak picanha alcatra pork spare ribs turkey pork chop brisket t-bone shoulder.', '2021-09-10 08:00:35', 3, 29),
       ('Gym Bros', 'Looking for a bro to go to the gyms. Bacon ipsum dolor amet burgdoggen leberkas pig shank tongue meatball buffalo bresaola swine alcatra turkey. Kielbasa capicola tenderloin, short loin tri-tip chicken shoulder shankle bresaola fatback. Corned beef short loin swine chislic. Swine shoulder cupim, short ribs tri-tip brisket pork loin landjaeger doner capicola ground round spare ribs. Landjaeger flank shank, doner tail prosciutto spare ribs leberkas hamburger swine pastrami. Drumstick bresaola ham hock bacon buffalo chislic tongue picanha boudin shankle.', '2021-09-10 01:15:12', 7, 52),
       ('Nordic Skiing', 'The least fun you can have skiing. Chislic andouille ball tip ribeye. Tongue turkey andouille meatloaf. Turkey turducken pork chop pork kielbasa cupim, tri-tip alcatra bacon spare ribs beef tail meatball. Corned beef biltong andouille hamburger shankle flank ham bacon ground round rump. Beef ham short loin, strip steak fatback ribeye prosciutto ham hock sausage flank leberkas kielbasa shoulder corned beef filet mignon. Pork chop pig burgdoggen alcatra bacon ball tip brisket turkey tongue tail bresaola picanha kielbasa.', '2021-09-10 08:00:35', 8, 17),
       ('Paddle Boarding', 'It is like surfing but not reallyDoner frankfurter pig, pork chop kielbasa boudin ball tip burgdoggen hamburger cow pastrami andouille cupim bacon ground round. Sausage pork prosciutto tail t-bone, kevin meatball. Short loin pork belly beef ribs meatloaf capicola. Chicken hamburger ground round turducken pork chop t-bone venison salami biltong shoulder sirloin pork meatloaf buffalo strip steak. Jowl tri-tip tail, leberkas kielbasa strip steak picanha alcatra pork spare ribs turkey pork chop brisket t-bone shoulder.', '2021-09-10 09:15:44', 4, 14),
       ('Base Jumping', 'Who needs airplanes? Doner frankfurter pig, pork chop kielbasa boudin ball tip burgdoggen hamburger cow pastrami andouille cupim bacon ground round. Sausage pork prosciutto tail t-bone, kevin meatball. Short loin pork belly beef ribs meatloaf capicola. Chicken hamburger ground round turducken pork chop t-bone venison salami biltong shoulder sirloin pork meatloaf buffalo strip steak. Jowl tri-tip tail, leberkas kielbasa strip steak picanha alcatra pork spare ribs turkey pork chop brisket t-bone shoulder.', '2021-09-10 10:15:12', 3, 36),
       ('Rock Climbing', 'I just watched cliffhanger on Netflix and stallone made it look good. Doner frankfurter pig, pork chop kielbasa boudin ball tip burgdoggen hamburger cow pastrami andouille cupim bacon ground round. Sausage pork prosciutto tail t-bone, kevin meatball. Short loin pork belly beef ribs meatloaf capicola. Chicken hamburger ground round turducken pork chop t-bone venison salami biltong shoulder sirloin pork meatloaf buffalo strip steak. Jowl tri-tip tail, leberkas kielbasa strip steak picanha alcatra pork spare ribs turkey pork chop brisket t-bone shoulder.', '2021-09-10 10:36:45', 6, 27);


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