import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LanguageIcon from "@mui/icons-material/Language";
import { User } from "../../types/User";

type AsideProps = {
  user: User
}

export const Aside = ({ user }: AsideProps) => {

  return (
    <Box sx={{ width: "300px", height: "531px", marginTop: "34px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "272px",
          background: "#5253B9",
          borderTopLeftRadius: "5px",
        }}
      >
        <Box
          sx={{
            width: "160px",
            height: "160px",
            margin: "20px",
          }}
        >
          <img
            style={{ maxWidth: "100%", borderRadius: "50%" }}
            src={user.avatarUrl}
            alt={`avatar of ${user.login}`}
            title={`avatar of ${user.login}`}
          />
        </Box>

        <Typography sx={{ color: "#fff", fontWeight: "medium" }}>
          {user.name}
        </Typography>
        <Typography sx={{ color: "#fff" }}>{user.login}</Typography>
      </Box>
      <Box
        sx={{
          color: "#fff",
          background: "#5265B9",
          padding: "30px 16px",
          borderBottomLeftRadius: "5px",
        }}
      >
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          {user.bio}
        </Typography>

        {user.company && (
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              marginY: "10px",
            }}
          >
            <ApartmentIcon sx={{ width: "20px" }} />
            <Typography variant="caption">{user.company}</Typography>
          </Box>
        )}

        {user.location && (
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              marginY: "10px",
            }}
          >
            <AddLocationAltIcon sx={{ width: "20px" }} />
            <Typography variant="caption">{user.location}</Typography>
          </Box>
        )}

        {user.websiteUrl && (
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              marginY: "10px",
            }}
          >
            <LanguageIcon sx={{ width: "20px" }} />
            <Typography variant="caption">
              <Link
                sx={{ color: "white" }}
                href={user.websiteUrl}
                rel="noopener"
                target="_blank"
              >
                {user.websiteUrl}
              </Link>
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
