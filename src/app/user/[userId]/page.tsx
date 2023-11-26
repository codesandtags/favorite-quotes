'use client';
import { useUser } from '@/contexts/UserContext';

export default function UserPage({ params }: { params: { userId: string } }) {
  // Shows current user authenticated
  const currentUser = useUser();

  return (
    <section className="card mt-6 container m-auto p-4 ">
      <h1 className="text-3xl font-semibold my-4">
        Hi {currentUser.user?.displayName}
      </h1>
      <div className="card-body">
        <div className="flex flex-col gap-4 ">
          <div className="form-control">
            <label className="label" htmlFor="text">
              <span className="label-text">Your email</span>
            </label>
            <input
              id="text"
              name="text"
              className="input input-bordered"
              placeholder="Bio"
              value={currentUser.user?.email || 'No email'}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="text">
              <span className="label-text">Your name</span>
            </label>
            <input
              id="text"
              name="text"
              className="input input-bordered"
              placeholder="Bio"
              value={currentUser.user?.displayName || 'No name'}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="text">
              <span className="label-text">Your avatar</span>
            </label>
            <img
              src={
                currentUser.user?.photoURL ||
                '/static/images/default-avatar.svg'
              }
              alt="avatar"
              className="rounded-full"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
