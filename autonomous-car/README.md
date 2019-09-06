# autonomous-car assignment

**This assignment may be completed using JavaScript or Python.**

Points is developing an autonomous vehicle program. It's going well, but we
need to iron out a few bugs. The Engineering Team would like to demo our
progress to the Product Team, so we need to develop a tool that can take track
and travel log data, and then determine whether our autonomous vehicle
successfully navigated the track.

Track and travel log data are encoded as JSON. The "track" array contains
entries for any position of the track where there is an obstacle in any of the
3 lanes (`"a"`, `"b"` or `"c"`). The "travelLog" array contains entries for any 
position of the track where the car has changed lanes, either to the `"left"` 
or `"right"`.

The autonomous car starts at position `0` on lane`"b"`, drives itself to the end
of the track and can shift only one lane per position. The simulation should 
end when the car hits an obstacle, goes out-of-bounds, or when all "track" and 
"travelLog" entries have been processed.

When the car navigates successfully, such as in the 
[success.json](data/success.json) example, then the simulator should
respond with:

    {"status": "success"}
    
When an error is encountered, such as in the
[out-of-bounds.json](data/out-of-bounds.json) example, then the simulator
should respond with:

    {"status": "error", "position": 2}

## Instructions

Clone or download this repository and then submit your solution to your contact
at Points. Please **do not fork or submit pull requests** to this repository.

## Requirements

* Implement your solution in JavaScript or using Python.
* Do not use 3rd-party libraries or frameworks.
* Include comments where you feel that they would be helpful.
* Include a README with instructions on how setup, run, and test the application.
* Include unit tests.
