import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function RecordPreview({
    recordId,
    firstName,
    middleName,
    lastName,
    age,
    gender,
    height,
    photo,
    crime_id,
}) {
    const [crime, setCrime] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:9988/api/crimes/id/${crime_id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data[0].cname)
                setCrime(data[0].cname)
            })
    }, [])
    return (
        <div
            className={`mx-auto w-full border-b-2 border-b-gray-700 h-28 my-2 rounded-md`}
        >
            <Link to={`${recordId}`}>
                <div className="mx-auto flex gap-1 w-full">
                    <div className="w-2/12">
                        <img
                            src={
                                photo
                                    ? `data:image/jpeg;base64,${photo.b64}`
                                    : gender == 2
                                    ? "data:image/jpeg;base64,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"
                                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADuCAMAAAB24dnhAAAAnFBMVEWUlZn///8REiSYmZ1QUFgFBx6RkpaOj5MODyKxsbOTlZgAAACMjZIAABsPECIAABikpany8vP5+fm6ur2dnqKpqq0AABbq6urb29zh4uLLzM0AABGAgIgeHy86OkbFxcjS0tS+vsEtLjtCQ0x2dn4kJjQyM0AYGStaW2NtbnVkZWzIx8u1tblWWGFNTFh4eoQ7PEYAAAowMTuCgo2Q9ghUAAAJXklEQVR4nO2dCXeqOhCAI0iAa1BEUFxQQXFfel///397Uem1tYvKzBjq4Xs9t7b1PPlOksnKwCpUeN1xbLu+LvGD1ijseGQfdQmj+d92Y9cUJufsBOfcFNyNwybNx11AIdUc+Wefd3AuWNB7gBe+VMeWQn8+K2ViJnfH6J95AbZUxxZflNGFlxnTFheulNcyryllXnYH9YM/girVY+YtSietgE4LUarj36x00tpQVUI8qfXVxvRZa0TTd2FJNYO7iinD9LtIn/8BJKnuV/3STVpxB78S4kj1RD4ldqiDQrgj3KCBIhXnqXrvxbjwe4jNC0OqBXQ6FZjeQ7iUEwhScf669wFTx4oacKkRQjlliBgudAAsFeI5ycIKUFoWVKqZM5R/Z+ViWEGlXFwpxn31Uj3MyneyClRLNb+dDObHHCmWgva6XyLAkR0khRwl3tCVSq0pCgqhAoKkdBInaQUcuEOkOkjjo0/wljqpEU2TOljBigoi5VM5QVsVQMqjCRNHYOMKgFSXUEqApsIAqTGhFAfVP4BUTBYnJK4iKZtSSkCmIACpgFLKhAwAAVIuoRMzIcswACm6booBBxWFlYLMFSHVj7JNgbrfwkpBJlVFjX4MMigtaj+lSop0RKFKCn957D2K2hTqgvMnFEW/DqWUqn7Ko2xTqkYUZItJR6m1IinKmG6GiqTWhFKg+TxEinKRwgRcF0jKo1rMlE1K1XSecvLBY2VSdAMlUJyASdGNKWBbBEXcn5IIdVJ080SVUmTzxFKqlLoO2ejvKaUUhnQ6Kdj+KExqQ9ZRKZRqUUnpoMNkwGM8zyhFNk1UtpFdodv2hU2ngFJUw3TgoT+YFNWEntsKpajWM4GHk/JLdVudSocoUMjZfBjnD4C5pTzORdejcWLmOBQif2nllmoKxn2PaJHWHPuQdpW/pGRzMtdUxw7klBrQrvJLHdbHdMIdejP/nbP5AwXx7igz8y8855eiO5d5AjD8A4R00o1EUP+bX4oq8mVA1mgLe+SAAyYfBT2ZCRunF3UjW9XRONI9X9AaGUSK8sgLaOoLkSI8HaJu041wexR2DxVokkh44k/dahJZo1K58ELWUymbzku6VI0K1EtB93ypSgp01B4oRTam5bD8FMXcSYQtpQOlEDMcvAcY/Iq5mGnGKqWITicB4wRU6tBTYec5kF+wiwKnbvBN08Z1soWAZnuBSnmtEe68ildG4DQHGNl4UAN7AZJsHMHco8fIsYEihbmsCb1t/giGFOZNH7AbfDMwpDBnIBwjzxWGFOZaBWCv4wyGFGZeCgE6EZyBIdXElMJIiochhZnDAXbQLwNFCnFIAdkX+AdK0kLEpTKMAQWOFN6QAmVAgSOFd5gMttz8BooU3k4pSkTHkWpiOUFzC2XgpGxFm3wAV1wykPLQItU/lOEslhTW7TmAAyHvQUqDjFP/UHJLVtCkcAbqKEP0Cl4WbpSREnRp7A0sqTHCSB24gXMGLQk8wlotcFvgDJoUvFVhtSjMdP3Qo0o4Y9kjeFLQQ8I4I6QjiE+LgMUKgVb5cJ/rsQE0KxNjEfMNTKlKridGHEFsUBVkKS/vvJ6jRfMjqFK515UQg8QBXKlKvpIC3oTziVLqOjxXAvVS6gZKqeuUUqXUPZRS1ymlSql7KKWuU0qVUvdQjKkH6mQeWypvzheUE0lnMKWabu6FF3ODeB2YUmHeR3UerXTEh1qiSXkt4L4H2p4HnlSowzcIXKzCQtrztTF2ErkAZAt5D8qBq9FtT8a+jvkHZUUdLuX1/mCezPQRzryApXrwxvQBjqAFk2qOTPz7crjJxurun+raWG3pEpPHShJWN3vu3Y8vvwNuBvmLK6dUGHDaxCHHWrjJeR9VDikvtAVVvbv04q08XvdKNUObPcYo8xJ6q3tvPbxLqtMLGGVD+tbLHt+1K3e7VNjSCeL3jV6m6Y9ur4g3SXmyiB7UjH4QE/zWArsu1Qw3vnKjE7LA3Di83sKuSHVHroJW9ANcRvqgd6Vn/kHKCzcyphbJKEMWmB7/1MK+k2qObbMYde5ruGCtbyvil1LegzujfHBT/2bI8YVUp/Wn+EYnpNfoi4D4SSr0CxUYrsJF8Km4LqTG/m8ppDNcuN0fpEJf1ZABhpyndL6RagYi1/J+EeAfzguepca/qy1dYrLuJykPcqyyGJyXeDMpL//afnEQmw9Snv+rq94bpv1OKvcx0aKRhYujFMpKeCE4tStWwbn5pCgcbytjxA9xfDTHPFKMNvXl4zkk5WWI97MWgkNRMeIn2D4e0ZVSpI+PVwBvVRhZ4kFl+BVG+6hhFYgmo87l/njMkFFn3X88vMeeLU4czqQx2vz0SiB8hIU6nrCcSkpKSkpKSkpKSkpKSkpKSkpKSp4T/Qlh1SeEGU8I056QUuq3kEkZlqZZVvY74+2PRt/RGta/nxz5nvOPBeYkZWzTujWcHdWM+dapy1eW1d4Fq9pAvjj83nAmS8eY7Ye/wOokZSWi3RbOJDGcl0nka9YkcaKkOpZWva0zr2pG+2W4smuT4eujpOp1rX7+6a0WWR/fYmnyy6pbh3/q8nv2h6z69f2+I6ZTni7303STiKmY+NNtuPpbWwez3mbs6OvN0uWbaJY+SGouvw5XashLtow0deT3uhEdrv+N1EqNaO6k6WxmzDVnZiTOB6nGdLKouul2KmqN6HW16Bti8LexiLvVXlsf1ARb12qLZlyzrAc5Wcl09TJzotnCmWnRUCwWjaHlDFk7NZIkSrRZlBjLqUjEYCjSzbAfpK+7/aBqvJeyUrG3NttFIv4a89dltd1ng4ZRq01G67Y/rQ38Ua22isPI+OE6cHHEYO8KMQkWexYMB8tgtWRi6/qNROyE2A9sN1kJO/KFP5hW/Z3+XzyYCtF+L6W1XVET1epssKhGPOK7/fa1v7DFaMk3L2MRzm2bLe1daNS/vwxcGsvBYilLSCz2gtdXulhNxWDhL3dDsR28LhMhlpb+upO/m4oV29ovYlAVifVByprI0l0to8ZiGc2SaLnrD41oMX3p91eN2TR12qtVsusvkofFvro2b8zm88SIUisykrklXzqzw6so1VJNi6KhYSVOKtuSk1iODCFplGYV6V/nK8N23XFkW3QObdAx5LssR37T5Pud098MzXlgPM/i2uGrrlnH6Hb4dvxPvvwX+g7vqmun+KFdSD0TpdRv4Sml/gdqYugyOKl29wAAAABJRU5ErkJggg=="
                            }
                            className="object-contain h-24 w-24 mx-auto"
                            alt="clearly recognizeable criminal face"
                        />
                    </div>
                    {/* <span className="w-1/12 text-center">{recordId}</span> */}
                    <span className="w-3/12 text-center">
                        {`${firstName} ${
                            middleName ? middleName : ""
                        } ${lastName}`}
                    </span>
                    <span className="w-1/12 text-center">{age}</span>
                    <span className="w-1/12 text-center">
                        {gender === 1 ? "Male" : gender === 2 ? "Female" : "-"}
                    </span>
                    <span className="w-2/12 text-center">{height}</span>
                    <span className="w-2/12 text-center">
                        {crime ? crime : "-"}
                    </span>
                </div>
            </Link>
        </div>
    )
}
