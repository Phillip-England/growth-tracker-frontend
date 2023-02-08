import { ButtonLink } from "../../components/ButtonLink"

export const Home = () => {
  return (
    <>
      <div className="m-2 flex flex-col justify-between p-4">
        <div className="mb-5 flex flex-grow justify-between">
          <h2 className="flex-1 self-center text-xl">Locations</h2>
          <ButtonLink text="Create New Location" to="/app/locations" />
        </div>
        <p className="italic">
          You currently have no locations. Create one to get started.
        </p>
      </div>
    </>
  )
}
